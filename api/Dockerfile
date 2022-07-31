#######################
# Stage 1, machine deps
#######################
FROM ruby:3.0.2 AS machine-deps

ARG PORT
ARG REDIS_URL
ARG REDIS_DB
ARG SECRET_KEY_BASE
ENV PORT=${PORT}
ENV SECRET_KEY_BASE=${SECRET_KEY_BASE}
ENV RAILS_ENV=production
ENV REDIS_URL=${REDIS_URL}
ENV REDIS_DB=${REDIS_DB}

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Build requirements
RUN apt-get update && apt-get install -y \
      binutils-gold \
      curl \
      file \
      g++ \
      gcc \
      git \
      less \
      libffi-dev \
      libc-dev \
      libxml2-dev \
      libxslt-dev \
      libgcrypt-dev \
      make \
      netcat-openbsd \
      nodejs \
      openssl \
      python \
      tzdata

# Yarn
RUN echo "deb [trusted=yes] https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -y && apt-get -y install yarn

########################
# Stage 2, Ruby packages
########################
FROM machine-deps AS ruby-deps
WORKDIR /var/www

COPY Gemfile .
COPY Gemfile.lock .

RUN gem install bundler
RUN bundle config build.nokogiri --use-system-libraries
RUN bundle config set --local without 'test development'
RUN bundle check || bundle install -j 10

###################
# Stage 3, App Deps
###################
FROM ruby-deps AS app-deps
WORKDIR /var/www

COPY app app
COPY bin bin
COPY config config
COPY db db
COPY lib lib
COPY public public
COPY Rakefile .
COPY config.ru .
COPY package.json .

#######################
# Stage 4, Rails Assets
#######################
FROM app-deps AS app-assets
WORKDIR /var/www

ENV NODE_ENV production

RUN mkdir -p tmp/cache tmp/sockets tmp/pids tmp/cache/assets tmp/sessions public/assets log
RUN yarn install
RUN bundle exec rake assets:precompile
RUN bundle exec rake assets:precompile

##################
# Stage 5, Assets
##################
FROM app-assets AS app
WORKDIR /var/www

EXPOSE 3000

COPY bin bin

ENTRYPOINT []
CMD ["./bin/docker-entrypoint.sh"]
