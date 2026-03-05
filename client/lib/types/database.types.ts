export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      properties: {
        Row: {
          id: string;
          created_at: string;
          title: string;
          description: string | null;
          price: number;
          location: string | null;
          availability: boolean | null;
          image_urls: string[] | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          title: string;
          description?: string | null;
          price: number;
          location?: string | null;
          availability?: boolean | null;
          image_urls?: string[] | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          title?: string;
          description?: string | null;
          price?: number;
          location?: string | null;
          availability?: boolean | null;
          image_urls?: string[] | null;
        };
        Relationships: [];
      };
      tenants: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          phone: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          phone: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          email?: string;
          phone?: string;
        };
        Relationships: [];
      };
      "printing-orders": {
        Row: {
          id: string;
          created_at: string;
          customer_name: string;
          email: string;
          product_type: "t-shirt" | "mug" | "banner" | "poster";
          quantity: number;
          design_url: string | null;
          status: "pending" | "processing" | "completed";
          total_price: number;
        };
        Insert: {
          id?: string;
          created_at?: string;
          customer_name: string;
          email: string;
          product_type: "t-shirt" | "mug" | "banner" | "poster";
          quantity: number;
          design_url?: string | null;
          status?: "pending" | "processing" | "completed";
          total_price: number;
        };
        Update: {
          id?: string;
          created_at?: string;
          customer_name?: string;
          email?: string;
          product_type?: "t-shirt" | "mug" | "banner" | "poster";
          quantity?: number;
          design_url?: string | null;
          status?: "pending" | "processing" | "completed";
          total_price?: number;
        };
        Relationships: [];
      };
      branding: {
        Row: {
          id: string;
          created_at: string;
          title: string;
          description: string | null;
          category: string;
          image: string | null;
          isFeatured: boolean;
          specs: Json | null;
          gallery: Json | null;
          reviews: Json | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          title: string;
          description?: string | null;
          category: string;
          image?: string | null;
          isFeatured: boolean;
          specs?: Json | null;
          gallery?: Json | null;
          reviews?: Json | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          title?: string;
          description?: string | null;
          category?: string;
          image?: string | null;
          isFeatured?: boolean;
          specs?: Json | null;
          gallery?: Json | null;
          reviews?: Json | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [key: string]: never;
    };
    Functions: {
      [key: string]: never;
    };
    Enums: {
      [key: string]: never;
    };
    CompositeTypes: {
      [key: string]: never;
    };
  };
}
