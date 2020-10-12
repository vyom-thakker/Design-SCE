let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name": "Losses"}
],
 "links": [
 {"source":"Paper", "target":"Households", "value":10.77, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":9.4983, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.2783, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":8.7718, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.7642, "optimal":"yes"} ]}; 
