# This file is autogenerated. Do not edit it by hand. Regenerate it with:
#   srb rbi gems

# typed: ignore
#
# If you would like to make changes to this file, great! Please create the gem's shim here:
#
#   https://github.com/sorbet/sorbet-typed/new/master?filename=lib/activejob/all/activejob.rbi
#
# activejob-5.2.8

module ActiveJob
  def self.gem_version; end
  def self.version; end
  extend ActiveSupport::Autoload
end
module ActiveJob::VERSION
end
class ActiveJob::Railtie < Rails::Railtie
end
module ActiveJob::Core
  def arguments_serialized?; end
  def deserialize(job_data); end
  def deserialize_arguments(serialized_args); end
  def deserialize_arguments_if_needed; end
  def initialize(*arguments); end
  def serialize; end
  def serialize_arguments(arguments); end
  def serialize_arguments_if_needed(arguments); end
  extend ActiveSupport::Concern
end
module ActiveJob::Core::ClassMethods
  def deserialize(job_data); end
  def set(options = nil); end
end
module ActiveJob::QueueAdapter
  extend ActiveSupport::Concern
end
module ActiveJob::QueueAdapter::ClassMethods
  def assign_adapter(adapter_name, queue_adapter); end
  def queue_adapter; end
  def queue_adapter=(name_or_adapter); end
  def queue_adapter?(object); end
  def queue_adapter_name; end
end
module ActiveJob::QueueName
  def queue_name; end
  extend ActiveSupport::Concern
end
module ActiveJob::QueueName::ClassMethods
  def default_queue_name; end
  def default_queue_name=(obj); end
  def queue_as(part_name = nil, &block); end
  def queue_name_from_part(part_name); end
  def queue_name_prefix; end
  def queue_name_prefix=(obj); end
  def self.default_queue_name; end
  def self.default_queue_name=(obj); end
  def self.queue_name_prefix; end
  def self.queue_name_prefix=(obj); end
end
module ActiveJob::QueuePriority
  def priority; end
  extend ActiveSupport::Concern
end
module ActiveJob::QueuePriority::ClassMethods
  def default_priority; end
  def default_priority=(obj); end
  def queue_with_priority(priority = nil, &block); end
  def self.default_priority; end
  def self.default_priority=(obj); end
end
class ActiveJob::DeserializationError < StandardError
  def initialize; end
end
class ActiveJob::SerializationError < ArgumentError
end
module ActiveJob::Arguments
  def convert_to_global_id_hash(argument); end
  def deserialize(arguments); end
  def deserialize_argument(argument); end
  def deserialize_global_id(hash); end
  def deserialize_hash(serialized_hash); end
  def serialize(arguments); end
  def serialize_argument(argument); end
  def serialize_hash(argument); end
  def serialize_hash_key(key); end
  def serialize_indifferent_hash(indifferent_hash); end
  def serialized_global_id?(hash); end
  def transform_symbol_keys(hash, symbol_keys); end
  extend ActiveJob::Arguments
end
module ActiveJob::Enqueuing
  def enqueue(options = nil); end
  extend ActiveSupport::Concern
end
module ActiveJob::Enqueuing::ClassMethods
  def job_or_instantiate(*args); end
  def perform_later(*args); end
end
module ActiveJob::Execution
  def perform(*arg0); end
  def perform_now; end
  extend ActiveSupport::Concern
  include ActiveSupport::Rescuable
end
module ActiveJob::Execution::ClassMethods
  def execute(job_data); end
  def perform_now(*args); end
end
module ActiveJob::Callbacks
  def self.__callbacks; end
  def self.__callbacks?; end
  def self._execute_callbacks; end
  def self._run_execute_callbacks(&block); end
  extend ActiveSupport::Concern
  include ActiveSupport::Callbacks
end
module ActiveJob::Callbacks::ClassMethods
  def after_enqueue(*filters, &blk); end
  def after_perform(*filters, &blk); end
  def around_enqueue(*filters, &blk); end
  def around_perform(*filters, &blk); end
  def before_enqueue(*filters, &blk); end
  def before_perform(*filters, &blk); end
end
module ActiveJob::Exceptions
  def determine_delay(seconds_or_duration_or_algorithm); end
  def retry_job(options = nil); end
  extend ActiveSupport::Concern
end
module ActiveJob::Exceptions::ClassMethods
  def discard_on(exception); end
  def retry_on(exception, wait: nil, attempts: nil, queue: nil, priority: nil); end
end
module ActiveJob::Logging
  def logger_tagged_by_active_job?; end
  def tag_logger(*tags); end
  extend ActiveSupport::Concern
end
class ActiveJob::Logging::LogSubscriber < ActiveSupport::LogSubscriber
end
module ActiveJob::Translation
  extend ActiveSupport::Concern
end
module ActiveJob::QueueAdapters
  def self.lookup(name); end
  extend ActiveSupport::Autoload
end
class ActiveJob::QueueAdapters::AsyncAdapter
  def enqueue(job); end
  def enqueue_at(job, timestamp); end
  def immediate=(immediate); end
  def initialize(**executor_options); end
  def shutdown(wait: nil); end
end
class ActiveJob::QueueAdapters::AsyncAdapter::JobWrapper
  def initialize(job); end
  def perform; end
end
class ActiveJob::QueueAdapters::AsyncAdapter::Scheduler
  def enqueue(job, queue_name:); end
  def enqueue_at(job, timestamp, queue_name:); end
  def executor; end
  def immediate; end
  def immediate=(arg0); end
  def initialize(**options); end
  def shutdown(wait: nil); end
end
class ActiveJob::Base
  def __callbacks; end
  def __callbacks?; end
  def _enqueue_callbacks; end
  def _perform_callbacks; end
  def _run_enqueue_callbacks(&block); end
  def _run_perform_callbacks(&block); end
  def arguments; end
  def arguments=(arg0); end
  def executions; end
  def executions=(arg0); end
  def job_id; end
  def job_id=(arg0); end
  def locale; end
  def locale=(arg0); end
  def logger; end
  def logger=(obj); end
  def priority=(arg0); end
  def provider_job_id; end
  def provider_job_id=(arg0); end
  def queue_name=(arg0); end
  def rescue_handlers; end
  def rescue_handlers=(val); end
  def rescue_handlers?; end
  def scheduled_at; end
  def scheduled_at=(arg0); end
  def self.__callbacks; end
  def self.__callbacks=(val); end
  def self.__callbacks?; end
  def self._enqueue_callbacks; end
  def self._enqueue_callbacks=(value); end
  def self._perform_callbacks; end
  def self._perform_callbacks=(value); end
  def self._queue_adapter; end
  def self._queue_adapter=(val); end
  def self._queue_adapter_name; end
  def self._queue_adapter_name=(val); end
  def self._test_adapter; end
  def self._test_adapter=(val); end
  def self.logger; end
  def self.logger=(obj); end
  def self.priority; end
  def self.priority=(val); end
  def self.priority?; end
  def self.queue_name; end
  def self.queue_name=(val); end
  def self.queue_name?; end
  def self.queue_name_delimiter; end
  def self.queue_name_delimiter=(val); end
  def self.queue_name_delimiter?; end
  def self.rescue_handlers; end
  def self.rescue_handlers=(val); end
  def self.rescue_handlers?; end
  def serialized_arguments=(arg0); end
  extend ActiveJob::Callbacks::ClassMethods
  extend ActiveJob::Core::ClassMethods
  extend ActiveJob::Enqueuing::ClassMethods
  extend ActiveJob::Exceptions::ClassMethods
  extend ActiveJob::Execution::ClassMethods
  extend ActiveJob::QueueAdapter::ClassMethods
  extend ActiveJob::QueueName::ClassMethods
  extend ActiveJob::QueuePriority::ClassMethods
  extend ActiveJob::TestHelper::TestQueueAdapter::ClassMethods
  extend ActiveSupport::Callbacks::ClassMethods
  extend ActiveSupport::DescendantsTracker
  extend ActiveSupport::Rescuable::ClassMethods
  include ActiveJob::Callbacks
  include ActiveJob::Core
  include ActiveJob::Enqueuing
  include ActiveJob::Exceptions
  include ActiveJob::Execution
  include ActiveJob::Logging
  include ActiveJob::QueueAdapter
  include ActiveJob::QueueName
  include ActiveJob::QueuePriority
  include ActiveJob::TestHelper::TestQueueAdapter
  include ActiveJob::Translation
  include ActiveSupport::Callbacks
  include ActiveSupport::Rescuable
end
module ActiveJob::TestHelper
  def after_teardown; end
  def assert_enqueued_jobs(number, only: nil, except: nil, queue: nil); end
  def assert_enqueued_with(job: nil, args: nil, at: nil, queue: nil); end
  def assert_no_enqueued_jobs(only: nil, except: nil, &block); end
  def assert_no_performed_jobs(only: nil, except: nil, &block); end
  def assert_performed_jobs(number, only: nil, except: nil); end
  def assert_performed_with(job: nil, args: nil, at: nil, queue: nil); end
  def before_setup; end
  def clear_enqueued_jobs; end
  def clear_performed_jobs; end
  def deserialize_args_for_assertion(job); end
  def enqueued_jobs(*args, &block); end
  def enqueued_jobs=(arg); end
  def enqueued_jobs_size(only: nil, except: nil, queue: nil); end
  def instantiate_job(payload); end
  def perform_enqueued_jobs(only: nil, except: nil); end
  def performed_jobs(*args, &block); end
  def performed_jobs=(arg); end
  def prepare_args_for_assertion(args); end
  def queue_adapter; end
  def queue_adapter_changed_jobs; end
  def queue_adapter_for_test; end
  def validate_option(only: nil, except: nil); end
end
module ActiveJob::TestHelper::TestQueueAdapter
  extend ActiveSupport::Concern
end
module ActiveJob::TestHelper::TestQueueAdapter::ClassMethods
  def disable_test_adapter; end
  def enable_test_adapter(test_adapter); end
  def queue_adapter; end
end
