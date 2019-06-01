$project = $_POST['type-project'];
$services = $_POST['services'];
$budget = $_POST['budget'];
$name = $_POST['name'];
$company = $_POST['company'];
$email = $_POST['email'];
$phone = $_POST['phone'];


$project = htmlspecialchars($project);                                      // защита от полученных данных
$services = htmlspecialchars($services);
$budget = htmlspecialchars($budget);
$name = htmlspecialchars($name);
$company = htmlspecialchars($company);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);


$project = urldecode($project);
$services = urldecode($services);
$budget = urldecode($budget);
$name = urldecode($name);
$company = urldecode($company);
$email = urldecode($email);
$phone = urldecode($phone);


mail("gurst332@mail.ru", "Заявка с сайта", "Тип проекта:".$project.". E-mail: ".$email , "Услуги:" ."From: grust3332@mail.ru \r\n");