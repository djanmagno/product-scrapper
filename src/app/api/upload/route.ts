import { NextRequest, NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const formData = await request.formData();
  const categoryFile = formData.get("category") as File | null;
  const productFile = formData.get("product") as File | null;

  if (!categoryFile || !productFile) {
    return NextResponse.json(
      { error: "Both category and product sitemaps are required" },
      { status: 400 }
    );
  }

  try {
    const parser = new XMLParser();
    const categoryText = await categoryFile.text();
    const productText = await productFile.text();

    const categoryXml = parser.parse(categoryText);
    const productXml = parser.parse(productText);

    const categoryUrls = categoryXml.urlset?.url ?? [];
    const productUrls = productXml.urlset?.url ?? [];

    const categoryCount = Array.isArray(categoryUrls) ? categoryUrls.length : 1;
    const productCount = Array.isArray(productUrls) ? productUrls.length : 1;

    return NextResponse.json({ categories: categoryCount, products: productCount });
  } catch {
    return NextResponse.json({ error: "Invalid XML format" }, { status: 400 });
  }
}
