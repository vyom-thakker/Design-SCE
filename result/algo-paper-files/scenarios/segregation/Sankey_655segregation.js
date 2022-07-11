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
{"source":"Households", "target":"Curbside Collection", "value":2.7755, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.3795, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.5306, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2233, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":2.5306, "optimal":"yes"} ]}; 
