let dataV={"nodes": [
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPP"},
{"name":"Lumber"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"PP", "target":"Households", "value":0.2225, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":3.4242, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.9504, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6963, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.69, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2374, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.1641, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":2.5259, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0903, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0607, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0131, "optimal":"yes"} ]}; 
