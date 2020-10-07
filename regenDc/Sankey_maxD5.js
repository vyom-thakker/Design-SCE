let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name": "Losses"}
],
 "links": [
 {"source":"Paper", "target":"Households", "value":10.7722, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":9.4935, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.2788, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":8.3694, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.7639, "optimal":"yes"} ]}; 
