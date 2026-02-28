export function useValid(formData) {

    function required (v) {
        return !!v || 'Field is required'
    }

    function emailRules(v) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(v)) return true
        return 'Введіть валідний email'
    }

    function confirmPasswordRules(v) {
        if (v === formData.password) return true
        return 'Паролі не співпадають'
    }

    return {
        required,
        emailRules,
        confirmPasswordRules
    }
}