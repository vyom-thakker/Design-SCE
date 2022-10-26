let dataV={"nodes": [
{"name":"Landfill"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.418, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.737, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.0072, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.1087, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.275, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.5487, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":2.56, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Me-Lactate from alcoholysis", "target":"Value-chain Upstream", "value":2.56, "optimal":"yes"} ]}; 
