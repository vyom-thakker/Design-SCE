let dataV={"nodes": [
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"Lactic acid from acid hydrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.3455, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.8095, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.0502, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2692, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":1.4655, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.5848, "optimal":"yes"} ]}; 
