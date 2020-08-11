let dataV={"nodes": [
{"name":"Incineration"},
{"name":"PP"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPP"},
{"name":"Clinker"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"PP", "target":"Households", "value":1.2651, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.1149, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1502, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.0165, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0897, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.8371, "optimal":"yes"} , 
{"source":"Segregation", "target":"Clinker", "value":0.1794, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.243, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.4604, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.067, "optimal":"yes"} ]}; 
