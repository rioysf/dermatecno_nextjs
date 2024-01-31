class CurrenciesUtility {

    formatStringToDotSeparator(string) {
        let dot_separator = string.replace(/,/g, '')
        return dot_separator.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }

}

export default CurrenciesUtility