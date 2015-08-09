class ClientMailer < ActionMailer::Base

  def send_to_admin(client)
    mail to: 'info@aero-montazh.ru', subject: 'Подтверждение регистрации', body: client, content_type: "text/html"
  end
end