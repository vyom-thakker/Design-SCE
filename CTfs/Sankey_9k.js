let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPaper"},
{"name": "Losses"}
],
 "links": [
 {"source":"Paper", "target":"Households", "value":7.1257, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":6.2798, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.8459, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":1.1939, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":4.4909, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.5053, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.7926, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":3.6983, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":3.6465, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0481, "optimal":"yes"} ]}; 
