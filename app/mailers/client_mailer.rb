class ClientMailer < ActionMailer::Base

  def send_to_admin(client)
    mail to: 'info@aero-montazh.ru', subject: 'Заявка с лэндинга', body: 'Имя: ' + client['name'] + '<br>Телефон: ' +
                                       client['phone'] + '<br>Время: ' + DateTime.now.strftime('%d/%m/%Y %H:%M:%S'), content_type: "text/html"
  end

  def send_order(order)
    mail to: 'info@aero-montazh.ru', subject: 'Заявка бризера с лэндинга', body: 'Фамилия: ' + order['last_name'] +
                                       '<br>Имя: ' + order['first_name'] + '<br>Отчество: ' + order['third_name'] +
                                       '<br>Телефон: ' + order['phone'] + '<br>Email: ' + order['email'] +
                                       '<br>Улица: ' + order['street'] + '<br>Дом: ' + order['house'] +
                                       '<br>Квартира: ' + order['flat'] + '<br>Время: ' +
                                       DateTime.now.strftime('%d/%m/%Y %H:%M:%S'), content_type: "text/html"
  end
end