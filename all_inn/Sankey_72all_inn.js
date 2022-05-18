let dataV={"nodes": [
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPP"},
{"name":"Lumber"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Lactic acid from acid hydrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.588, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.4858, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0939, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.1127, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.1276, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1528, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.0281, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0907, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1815, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0259, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.4316, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0054, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.2169, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.0745, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0142, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0096, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0021, "optimal":"yes"} ]}; 