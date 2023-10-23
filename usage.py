import dash_item_drag
from dash_item_drag import DashItemDrag
from dash import Dash, callback, html, Input, Output

app = Dash(__name__)

app.layout = html.Div([
        DashItemDrag(id='appleaaa',children=[html.Img(src="assets/newapple.png")]),
        DashItemDrag(id='a2',children=[html.Img(src="assets/newapple.png")]),
        DashItemDrag(id='a3',children=[html.Img(src="assets/newapple.png")]),
                                  ])



if __name__ == '__main__':
    app.run_server(debug=True)


