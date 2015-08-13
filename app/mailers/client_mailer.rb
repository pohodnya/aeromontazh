class ClientMailer < ActionMailer::Base

  def send_to_admin(client)
    mail to: 'info@aero-montazh.ru', subject: 'Заявка с лэндинга', body: 'Имя: ' + client['name'] + '<br>Телефон: ' +
                                       client['phone'] + '<br>Время: ' + DateTime.now.strftime('%d/%m/%Y %H:%M:%S'), content_type: "text/html"
  end
end