let dataV={"nodes": [
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"Lumber"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Lactic acid from acid hydrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.5879, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0036, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.725, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.1603, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1563, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.0579, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0934, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4589, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0029, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.0093, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0032, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.5798, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.0028, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2524, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.156, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0505, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0016, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0011, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0002, "optimal":"yes"} ]}; 
