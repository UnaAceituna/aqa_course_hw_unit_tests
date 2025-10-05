Task 2.
  Xpath/CSS: элемент с id - ‘submit’
#submit
//*[@id="submit"]

  Xpath/CSS: все элементы с классом ‘txt’ 
.txt
//*[contains(@class, "txt")]

  Xpath: первый элемент с классом ‘txt’
//*[contains(@class, "txt")][1]

  Xpath: кнопку которая содержит текст: ‘Remove comment’
//button[contains(@onclick, "removeComments()")]
//button[(text() = 'Remove comment')]

  Xpath: первый элемент с классом ‘one’ 
//*[contains(@class, "one")][1]

  Xpath/CSS: элемент с атрибутом ‘multitag2’ и значением  ‘on’ 
[multitag2='on']
//*[contains(@class, "txt")][4]
//span[@multitag2="on"]

  Xpath/CSS: всех детей элемента ‘div’ с классом ‘content’ 
div > .content
//div//*[@class="content"]

  CSS: все элементы ‘span’ и  ‘button’ с классом ‘content’ 
span.content, button.content

  Xpath: используя за основу селектор //*[@id='submit'] найти элемент body 
//*[@id='submit']/ancestor::body