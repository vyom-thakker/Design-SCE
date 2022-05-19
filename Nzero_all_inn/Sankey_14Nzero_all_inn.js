let dataV={"nodes": [
{"name":"Landfill"},
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
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.4167, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.007, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.7095, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.88, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2532, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.714, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1513, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3025, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1271, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0046, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.1026, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0357, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":1.1312, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0699, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0432, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.014, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0025, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0017, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0004, "optimal":"yes"} ]}; 