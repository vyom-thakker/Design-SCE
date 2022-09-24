let dataV={"nodes": [
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.2548, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.6735, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.315, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6133, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.1107, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1863, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1837, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.9269999999999998, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.10099999999999999, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0625, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0202, "optimal":"yes"} ]}; 
