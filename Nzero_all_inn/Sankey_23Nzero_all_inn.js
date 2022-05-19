let dataV={"nodes": [
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Lactic acid from acid hydrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0035, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.627, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.5044, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.9991, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1358, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.9109, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0804, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1608, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0023, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1536, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.18, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0626, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.3334, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0013, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0008, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0002, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0845, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0522, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0169, "optimal":"yes"} ]}; 