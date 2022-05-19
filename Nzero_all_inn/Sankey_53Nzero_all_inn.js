let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.6092, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.6135, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.5692, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6535, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.519, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0458, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0916, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2027, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.0048, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0002, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.004, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.2144, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1115, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0689, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0223, "optimal":"yes"} ]}; 
