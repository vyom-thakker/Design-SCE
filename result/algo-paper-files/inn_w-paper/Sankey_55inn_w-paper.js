let dataV={"nodes": [
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0001, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.7146, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.0001, "optimal":"yes"} ]}; 
