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
{"source":"Households", "target":"Curbside Collection", "value":3.4996, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6554, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.1907, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2816, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":3.1907, "optimal":"yes"} ]}; 
