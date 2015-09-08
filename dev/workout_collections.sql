create or replace view `workouts_v` as
    select 
		workouts.workout_id,
        workouts.workout_name,
        workouts.workout_days,
        counts.count,
		exercises.exercise_id,
        exercises.exercise_name,
        workouts_has_exercise.exercise_weight,
		days.day_name
    from
        workouts,
        workouts_has_exercise,
        counts,
        exercises,
		days
    where
        workouts_has_exercise.workout_id = workouts.workout_id
            and workouts_has_exercise.count_id = counts.count_id
            and workouts_has_exercise.exercise_id = exercises.exercise_id
			and workouts_has_exercise.day_id = days.day_id