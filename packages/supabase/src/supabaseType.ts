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
      admin_users: {
        Row: {
          createdAt: string;
          updatedAt: string;
          userId: string;
        };
        Insert: {
          createdAt?: string;
          updatedAt?: string;
          userId: string;
        };
        Update: {
          createdAt?: string;
          updatedAt?: string;
          userId?: string;
        };
        Relationships: [];
      };
      branding: {
        Row: {
          category: string;
          createdAt: string;
          description: string | null;
          gallery: Json | null;
          id: string;
          image: string | null;
          isFeatured: boolean;
          reviews: Json | null;
          specs: Json | null;
          title: string;
        };
        Insert: {
          category: string;
          createdAt?: string;
          description?: string | null;
          gallery?: Json | null;
          id?: string;
          image?: string | null;
          isFeatured?: boolean;
          reviews?: Json | null;
          specs?: Json | null;
          title: string;
        };
        Update: {
          category?: string;
          createdAt?: string;
          description?: string | null;
          gallery?: Json | null;
          id?: string;
          image?: string | null;
          isFeatured?: boolean;
          reviews?: Json | null;
          specs?: Json | null;
          title?: string;
        };
        Relationships: [];
      };
      branding_inquiries: {
        Row: {
          createdAt: string;
          customerName: string;
          email: string;
          company: string | null;
          id: string;
          message: string | null;
          productId: string | null;
          quantity: number;
          status: string;
        };
        Insert: {
          createdAt?: string;
          customerName: string;
          email: string;
          company?: string | null;
          id?: string;
          message?: string | null;
          productId?: string | null;
          quantity: number;
          status?: string;
        };
        Update: {
          createdAt?: string;
          customerName?: string;
          email?: string;
          company?: string | null;
          id?: string;
          message?: string | null;
          productId?: string | null;
          quantity?: number;
          status?: string;
        };
        Relationships: [
          {
            foreignKeyName: "branding_inquiries_product_id_fkey";
            columns: ["productId"];
            isOneToOne: false;
            referencedRelation: "branding";
            referencedColumns: ["id"];
          },
        ];
      };
      contact_messages: {
        Row: {
          createdAt: string;
          email: string;
          id: string;
          message: string;
          name: string;
          phone: string | null;
          status: string;
          subject: string | null;
        };
        Insert: {
          createdAt?: string;
          email: string;
          id?: string;
          message: string;
          name: string;
          phone?: string | null;
          status?: string;
          subject?: string | null;
        };
        Update: {
          createdAt?: string;
          email?: string;
          id?: string;
          message?: string;
          name?: string;
          phone?: string | null;
          status?: string;
          subject?: string | null;
        };
        Relationships: [];
      };
      lease_applications: {
        Row: {
          applicantName: string;
          createdAt: string;
          email: string;
          employment: string | null;
          id: string;
          message: string | null;
          phone: string | null;
          propertyId: string | null;
          status: string;
        };
        Insert: {
          applicantName: string;
          createdAt?: string;
          email: string;
          employment?: string | null;
          id?: string;
          message?: string | null;
          phone?: string | null;
          propertyId?: string | null;
          status?: string;
        };
        Update: {
          applicantName?: string;
          createdAt?: string;
          email?: string;
          employment?: string | null;
          id?: string;
          message?: string | null;
          phone?: string | null;
          propertyId?: string | null;
          status?: string;
        };
        Relationships: [
          {
            foreignKeyName: "lease_applications_product_id_fkey";
            columns: ["propertyId"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
        ];
      };
      payments: {
        Row: {
          amount: number;
          createdAt: string;
          date: string;
          id: string;
          status: string;
          tenantId: string | null;
        };
        Insert: {
          amount: number;
          createdAt?: string;
          date: string;
          id?: string;
          status?: string;
          tenantId?: string | null;
        };
        Update: {
          amount?: number;
          createdAt?: string;
          date?: string;
          id?: string;
          status?: string;
          tenantId?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "payments_tenant_id_fkey";
            columns: ["tenantId"];
            isOneToOne: false;
            referencedRelation: "tenants";
            referencedColumns: ["id"];
          },
        ];
      };
      properties: {
        Row: {
          availability: boolean;
          bathrooms: number | null;
          bedrooms: number | null;
          createdAt: string;
          description: string | null;
          features: Json | null;
          gallery: Json | null;
          id: string;
          imageUrl: string | null;
          isFeatured: boolean;
          location: string | null;
          price: number;
          reviews: Json | null;
          title: string;
          type: string | null;
        };
        Insert: {
          availability?: boolean;
          bathrooms?: number | null;
          bedrooms?: number | null;
          createdAt?: string;
          description?: string | null;
          features?: Json | null;
          gallery?: Json | null;
          id?: string;
          imageUrl?: string | null;
          isFeatured?: boolean;
          location?: string | null;
          price: number;
          reviews?: Json | null;
          title: string;
          type?: string | null;
        };
        Update: {
          availability?: boolean;
          bathrooms?: number | null;
          bedrooms?: number | null;
          createdAt?: string;
          description?: string | null;
          features?: Json | null;
          gallery?: Json | null;
          id?: string;
          imageUrl?: string | null;
          isFeatured?: boolean;
          location?: string | null;
          price?: number;
          reviews?: Json | null;
          title?: string;
          type?: string | null;
        };
        Relationships: [];
      };
      tenants: {
        Row: {
          avatarUrl: string | null;
          createdAt: string;
          email: string | null;
          id: string;
          leaseEndDate: string | null;
          name: string;
          propertyId: string | null;
          status: string;
        };
        Insert: {
          avatarUrl?: string | null;
          createdAt?: string;
          email?: string | null;
          id?: string;
          leaseEndDate?: string | null;
          name: string;
          propertyId?: string | null;
          status?: string;
        };
        Update: {
          avatarUrl?: string | null;
          createdAt?: string;
          email?: string | null;
          id?: string;
          leaseEndDate?: string | null;
          name?: string;
          propertyId?: string | null;
          status?: string;
        };
        Relationships: [
          {
            foreignKeyName: "tenants_property_id_fkey";
            columns: ["propertyId"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
