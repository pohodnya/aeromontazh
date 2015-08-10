ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.raise_delivery_errors = true
ActionMailer::Base.smtp_settings = {
    address:              'smtp.gmail.com',
    port:                  587,
    domain:               'gmail.com',
    user_name:            'noreply.aeromontazh@gmail.com',
    password:             'qwerty7777',
    authentication:       'plain',
    enable_starttls_auto:  true  }