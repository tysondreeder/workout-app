create or replace view `shared_workouts_v` as
    select
        connections.connection_id,
        connections.user_id,
        shared_workouts.workout_id,
        shared_workouts.synced
    from
        shared_workouts,
        connections
    where
		shared_workouts.share_id = connections.share_id
			