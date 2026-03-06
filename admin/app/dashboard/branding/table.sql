-- Create the branding table to store product information
CREATE TABLE branding (
    id TEXT PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    title TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL,
    image TEXT,
    is_featured BOOLEAN NOT NULL DEFAULT FALSE,
    specs JSONB,
    gallery JSONB,
    reviews JSONB
);

COMMENT ON TABLE "public"."branding" IS 'Stores branding product information, mirroring the structure from the initial mock data.';
COMMENT ON COLUMN "public"."branding"."specs" IS 'Stores product specifications as a JSON array of objects, e.g., [{"label": "Material", "value": "Cotton"}].';
COMMENT ON COLUMN "public"."branding"."gallery" IS 'Stores product gallery images as a JSON array of objects, e.g., [{"title": "Front View", "imageUrl": "...", "description": "..."}].';
COMMENT ON COLUMN "public"."branding"."reviews" IS 'Stores client reviews as a JSON array of objects, e.g., [{"id": "...", "author": "...", "rating": 5, "comment": "..."}].';
