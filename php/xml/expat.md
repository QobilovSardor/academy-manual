# 📔 PHP XML Expat Parser

## PHP XML Expat Parser 

O'rnatilgan XML Expat Parser PHP da XML hujjatlarini qayta ishlash imkonini beradi.

XML Expat Parser
Expat parser voqeaga asoslangan tahlilchidir.

Quyidagi XML fraktsiyasiga qarang:

```xml
<from>Jani</from>
```

Hodisaga asoslangan tahlilchi yuqoridagi XML ni uchta voqea qatori sifatida xabar qiladi:

- Boshlash elementi: dan
- CDATA qismini ishga tushiring, qiymat: Jani
- Elementni yopish: dan

XML Expat Parser funksiyalari PHP yadrosining bir qismidir. Ushbu funktsiyalardan foydalanish uchun o'rnatish kerak emas.

XML fayli
Quyidagi misolda "note.xml" XML faylidan foydalaniladi:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>
```

XML Expat Parser ishga tushirilmoqda

Biz PHP da XML Expat Parser dasturini ishga tushirmoqchimiz, turli XML hodisalari uchun ba'zi ishlov beruvchilarni aniqlaymiz va keyin XML faylini tahlil qilmoqchimiz.

```php
<?php
// Initialize the XML parser
$parser=xml_parser_create();

// Function to use at the start of an element
function start($parser,$element_name,$element_attrs) {
  switch($element_name) {
    case "NOTE":
    echo "-- Note --<br>";
    break;
    case "TO":
    echo "To: ";
    break;
    case "FROM":
    echo "From: ";
    break;
    case "HEADING":
    echo "Heading: ";
    break;
    case "BODY":
    echo "Message: ";
  }
}

// Function to use at the end of an element
function stop($parser,$element_name) {
  echo "<br>";
}

// Function to use when finding character data
function char($parser,$data) {
  echo $data;
}

// Specify element handler
xml_set_element_handler($parser,"start","stop");

// Specify data handler
xml_set_character_data_handler($parser,"char");

// Open XML file
$fp=fopen("note.xml","r");

// Read data
while ($data=fread($fp,4096)) {
  xml_parse($parser,$data,feof($fp)) or
  die (sprintf("XML Error: %s at line %d",
  xml_error_string(xml_get_error_code($parser)),
  xml_get_current_line_number($parser)));
}

// Free the XML parser
xml_parser_free($parser);
?>
```

Misol tushuntirildi:

1. xml_parser_create()Funktsiya bilan XML parserni ishga tushiring
2. Turli hodisalarni ishlovchilar bilan foydalanish uchun funksiyalarni yarating
3. xml_set_element_handler()Tahlilchi ochish va yopish teglariga duch kelganda qaysi funktsiya bajarilishini belgilash uchun funktsiyani qo'shing
4. xml_set_character_data_handler()Tahlil qiluvchi belgilar ma'lumotlariga duch kelganda qaysi funktsiya bajarilishini belgilash uchun funktsiyani qo'shing
5. xml_parse()Funktsiya bilan "note.xml" faylini tahlil qiling
6. Xato bo'lsa, xml_error_string()XML xatosini matn tavsifiga aylantirish funksiyasini qo'shing
7.  Funktsiyaga xml_parser_free()ajratilgan xotirani bo'shatish uchun funktsiyani chaqiringxml_parser_create()










