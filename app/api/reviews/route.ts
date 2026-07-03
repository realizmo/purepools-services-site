import { NextResponse } from 'next/server';

const PLACE_ID = 'ChIJG1880ddlwokRD9BS52wUR2g';
const API_KEY = process.env.GOOGLE_PLACES_API_KEY ?? '';

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 500 });
  }

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${PLACE_ID}` +
    `&fields=reviews,rating,user_ratings_total` +
    `&reviews_sort=newest` +
    `&key=${API_KEY}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.status !== 'OK') {
      return NextResponse.json({ error: data.status }, { status: 502 });
    }

    const reviews = (data.result.reviews ?? []).map((r: {
      author_name: string;
      rating: number;
      text: string;
      relative_time_description: string;
    }) => ({
      name: r.author_name,
      rating: r.rating,
      quote: r.text,
      time: r.relative_time_description,
    }));

    return NextResponse.json({
      reviews,
      rating: data.result.rating,
      total: data.result.user_ratings_total,
    });
  } catch {
    return NextResponse.json({ error: 'Fetch failed' }, { status: 502 });
  }
}
