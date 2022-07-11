let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0007, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.7140000000000001, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0005, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0001, "optimal":"yes"} ]}; 
