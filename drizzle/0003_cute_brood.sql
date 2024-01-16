CREATE TABLE `events` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`location` text,
	`date` text,
	`organiser` text
);
--> statement-breakpoint
CREATE TABLE `events_users` (
	`user_id` integer,
	`event_id` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON UPDATE no action ON DELETE no action
);
