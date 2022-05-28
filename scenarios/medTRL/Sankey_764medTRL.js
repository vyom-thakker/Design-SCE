let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"Compost"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0289, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0007, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7144, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0005, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6282, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0025, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.085, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.14400000000000002, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.0062, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.3935, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0505, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0005, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0015, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0003, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0697, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0003, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3247, "optimal":"yes"} , 
{"source":"Segregation", "target":"Compost", "value":0.0002, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0002, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0001, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1786, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1104, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0357, "optimal":"yes"} ]}; 