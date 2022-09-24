let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0004, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6299, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0848, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0019, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5720000000000001, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0507, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.10099999999999999, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4711, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2591, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1602, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0518, "optimal":"yes"} ]}; 
