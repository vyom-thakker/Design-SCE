let dataV={"nodes": [
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Lactic acid from acid hydrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.4298, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.6565, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.8386, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2477, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.6763, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1479, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3393, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0003, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0044, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":1.2686, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.0625, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1866, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1153, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0373, "optimal":"yes"} ]}; 
