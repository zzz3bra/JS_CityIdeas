class highlightingConstants {
    public static leftSelect = '<span class="highlightedText">';
    public static leftSelectLength = highlightingConstants.leftSelect.length;
    public static rightSelect = '</span>';
    public static rightSelectLength = highlightingConstants.rightSelect.length;
    public static leftSelectClear = new RegExp(highlightingConstants.leftSelect, "gm");
    public static rightSelectClear = new RegExp(highlightingConstants.rightSelect, "gm");
}
export = highlightingConstants;