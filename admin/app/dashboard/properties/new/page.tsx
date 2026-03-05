import PropertyForm from "../property-form";

export default function NewPropertyPage() {
    return (
        <div className="mx-auto max-w-5xl">
            <h1 className="text-2xl font-bold mb-4">
                Create New Property
            </h1>
            <PropertyForm />
        </div>
    )
}
