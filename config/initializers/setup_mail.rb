ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.raise_delivery_errors = true
ActionMailer::Base.smtp_settings = {
    address:              'smtp.gmail.com',
    port:                  587,
    domain:               'aeromontazh.herokuapp.com',
    user_name:            'aeromontazh@gmail.com',
    password:             'mmsxowprmxtwpygo',
    authentication:       'plain',
    enable_starttls_auto:  true  }