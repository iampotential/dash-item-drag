# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashItemDrag <- function(children=NULL, id=NULL) {
    
    props <- list(children=children, id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashItemDrag',
        namespace = 'dash_item_drag',
        propNames = c('children', 'id'),
        package = 'dashItemDrag'
        )

    structure(component, class = c('dash_component', 'list'))
}
