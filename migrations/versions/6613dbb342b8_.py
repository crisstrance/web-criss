"""empty message

Revision ID: 6613dbb342b8
Revises: 17fde4cbadde
Create Date: 2023-12-07 02:56:52.078358

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6613dbb342b8'
down_revision = '17fde4cbadde'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('admin',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('diets',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('breakfast', sa.String(length=120), nullable=False),
    sa.Column('brunch', sa.String(length=120), nullable=False),
    sa.Column('lunch', sa.String(length=120), nullable=False),
    sa.Column('dinner', sa.String(length=120), nullable=False),
    sa.Column('supper', sa.String(length=120), nullable=False),
    sa.Column('id_trainer', sa.String(length=120), nullable=True),
    sa.Column('id_user', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('routines',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('Chest', sa.String(length=120), nullable=False),
    sa.Column('shoulders', sa.String(length=120), nullable=False),
    sa.Column('arms', sa.String(length=120), nullable=False),
    sa.Column('legs', sa.String(length=120), nullable=False),
    sa.Column('id_user', sa.String(length=120), nullable=True),
    sa.Column('id_trainer', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('trainer',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=120), nullable=False),
    sa.Column('last_name', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('date_of_birth', sa.String(length=120), nullable=True))
        batch_op.add_column(sa.Column('routine', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('diet', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('pathologies', sa.String(length=120), nullable=False))
        batch_op.drop_constraint('user_first_name_key', type_='unique')
        batch_op.drop_constraint('user_last_name_key', type_='unique')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.create_unique_constraint('user_last_name_key', ['last_name'])
        batch_op.create_unique_constraint('user_first_name_key', ['first_name'])
        batch_op.drop_column('pathologies')
        batch_op.drop_column('diet')
        batch_op.drop_column('routine')
        batch_op.drop_column('date_of_birth')

    op.drop_table('trainer')
    op.drop_table('routines')
    op.drop_table('diets')
    op.drop_table('admin')
    # ### end Alembic commands ###
