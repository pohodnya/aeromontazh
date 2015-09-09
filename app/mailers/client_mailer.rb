class ClientMailer < ActionMailer::Base

  def send_to_admin(client)
    mail to: 'info@aero-montazh.ru', subject: 'Заявка с лэндинга', body: 'Имя: ' + client['name'] + '<br>Телефон: ' +
                                       client['phone'] + '<br>Время: ' + DateTime.now.strftime('%d/%m/%Y %H:%M:%S'), content_type: "text/html"
  end

  def send_order(order)
    mail to: 'info@aero-montazh.ru', subject: 'Заявка бризера с лэндинга', body: 'Бризер: ' + order['brizer_type'] +
                                       '<br>ФИО: ' + order['first_name'] + ' ' + order['last_name'] + ' ' + order['third_name'] +
                                       '<br>Телефон: ' + order['phone'] + '<br>Email: ' + order['email'] +
                                       '<br>Адрес: г.Новосибирск, ул.' + order['street'] + ' д.' + order['house'] +
                                       ' кв. ' + order['flat'] + '<br>Время: ' +
                                       DateTime.now.strftime('%d/%m/%Y %H:%M:%S'), content_type: "text/html"
  end
end