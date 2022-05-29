let dataV={"nodes": [
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.1777, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":2.9773, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.0737, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0948, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.0737, "optimal":"yes"} ]}; 
