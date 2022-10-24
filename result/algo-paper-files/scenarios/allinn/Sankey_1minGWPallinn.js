let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"rPLA"},
{"name":"rPaper"},
{"name":"Compost"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Clay reycled PLA"},
{"name":"Lactic acid from acid hydrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":-3083.3303, "optimal":"yes"} , 
{"source":"Incineration", "target":"Landfill", "value":12305654361.0, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":-8888880.0, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":-111111.0, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":-111111.0, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":-111111.0, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":-111111.0, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.6618, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":-127977.6498, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":-111110.5068, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.4638, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":17237.9252, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":17905.6633, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":-0.0001, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2946, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":-15435.6706, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Landfill", "value":-573692219.8052, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Incineration", "value":-595915087.5433, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":3.3387, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":-14583.3188, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":61727900651.5158, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":-595897181.88, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":-111111.0, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":-111111.0, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":-111111.0, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":-111111.0, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":-111111.0, "optimal":"yes"} , 
{"source":"Segregation", "target":"Compost", "value":-302393030.94, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":-111111.0, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":-111111.0, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":-111111.0, "optimal":"yes"} , 
{"source":"Segregation", "target":"Clay reycled PLA", "value":-111111.0, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":-111111.0, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":2.7493, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Pyrolysis", "value":-111111.0, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":-12446451997.98, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":-61111.05, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":-9999.99, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Pyrolysis", "value":-111111.0, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":-12446451997.98, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":-61111.05, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":-12222.21, "optimal":"yes"} , 
{"source":"rPP", "target":"Pyrolysis", "value":-111111.0, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":-12446451997.98, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":-61111.05, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":-8888.88, "optimal":"yes"} , 
{"source":"rPLA", "target":"Pyrolysis", "value":-111111.0, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":-12446451997.98, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":-16666.65, "optimal":"yes"} , 
{"source":"rPLA", "target":"Compost", "value":-100797676.98, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":-7777.77, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":-109555.446, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":-1444.443, "optimal":"yes"} ]}; 