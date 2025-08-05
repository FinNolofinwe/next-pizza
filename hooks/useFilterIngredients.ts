import { Ingredient } from "@prisma/client"
import React from "react"
import { Api } from "../services/api-client"
import { useSet } from 'react-use'

interface ReturnProps {
    ingredients: Ingredient[]
    loading: boolean
    selectedIds: Set<string>
    onAddId: (id: string) => void
}

interface PriceProps {
    priceFrom: number;
    priceTo: number;
}

export const useFilterIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = React.useState<ReturnProps["ingredients"]>([]);
    const [loading, setLoading] = React.useState(false);
    const [selectedIds, { toggle }] = useSet(new Set<string>([]))
    React.useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true)
                const fetchedIngredients = await Api.ingredients.getAll();

                setIngredients(fetchedIngredients)

            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
        fetchIngredients()
    }, [])

    return {
        ingredients,
        loading,
        onAddId: toggle,
        selectedIds
    }
}


