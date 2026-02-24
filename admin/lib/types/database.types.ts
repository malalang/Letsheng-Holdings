export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      properties: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          price: number;
          location: string | null;
          availability: boolean | null;
          image_urls: string[] | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          price: number;
          location?: string | null;
          availability?: boolean | null;
          image_urls?: string[] | null;
          created_at?: string | null;
        };
      };
      printing_orders: {
        Row: {
          id: string;
          customer_name: string;
          email: string;
          product_type: string;
          quantity: number;
          design_url: string | null;
          status: string;
          total_price: number;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          customer_name: string;
          email: string;
          product_type: string;
          quantity: number;
          design_url?: string | null;
          status?: string;
          total_price: number;
          created_at?: string | null;
        };
      };
    };
  };
};
