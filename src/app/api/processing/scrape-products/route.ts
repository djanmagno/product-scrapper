import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { load } from "cheerio";

interface Product {
  name: string;
  category: string;
  price: string;
  description: string;
  url: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { urls, maxProductsPerCategory } = await request.json();

    if (!Array.isArray(urls)) {
      return NextResponse.json(
        { error: "urls must be an array" },
        { status: 400 }
      );
    }

    const limit =
      typeof maxProductsPerCategory === "number"
        ? maxProductsPerCategory
        : Infinity;

    const productsByCategory: Record<string, Product[]> = {};

    for (const url of urls) {
      try {
        const { data } = await axios.get(url);
        const $ = load(data);

        const name =
          $('meta[property="og:title"]').attr("content") ||
          $("h1").first().text().trim();
        const price =
          $('meta[property="product:price:amount"]').attr("content") ||
          $("[itemprop='price']").attr("content") ||
          "";
        const description =
          $("meta[name='description']").attr("content") ||
          $("[itemprop='description']").text().trim();
        const category =
          $('meta[property="product:category"]').attr("content") ||
          $("meta[name='category']").attr("content") ||
          "Uncategorized";

        if (!productsByCategory[category]) {
          productsByCategory[category] = [];
        }

        if (productsByCategory[category].length < limit) {
          productsByCategory[category].push({
            name,
            category,
            price,
            description,
            url,
          });
        }
      } catch (err) {
        console.error(`Failed to scrape ${url}`, err);
      }
    }

    return NextResponse.json({ products: productsByCategory });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

