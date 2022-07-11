let dataV={"nodes": [
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Lactic acid from acid hydrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.5625, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.8848, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.2755, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1718, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.163, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1026, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.2887, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0018, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1246, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.711, "optimal":"yes"} ]}; 
