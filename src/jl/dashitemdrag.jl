# AUTO GENERATED FILE - DO NOT EDIT

export dashitemdrag

"""
    dashitemdrag(;kwargs...)
    dashitemdrag(children::Any;kwargs...)
    dashitemdrag(children_maker::Function;kwargs...)


A DashItemDrag component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
"""
function dashitemdrag(; kwargs...)
        available_props = Symbol[:children, :id]
        wild_props = Symbol[]
        return Component("dashitemdrag", "DashItemDrag", "dash_item_drag", available_props, wild_props; kwargs...)
end

dashitemdrag(children::Any; kwargs...) = dashitemdrag(;kwargs..., children = children)
dashitemdrag(children_maker::Function; kwargs...) = dashitemdrag(children_maker(); kwargs...)

