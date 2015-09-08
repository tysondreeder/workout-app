CREATE or replace VIEW `users_v` AS
    select 
        users.user_email,
        users.user_name,
        users.user_password,
        users.user_height,
        users.user_weight,
        users.user_bmi,
        users.user_created,
        config.weight_type,
        config.language,
        config.start_of_week
    from
        users,
        config
    where
        users.user_id = config.user_id
